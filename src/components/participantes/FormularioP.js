import React,{useState, useContext, useEffect} from 'react';
import participantesContext from '../../context/participantes/participantesContext';

const FormularioP=({añadir})=> {


  //extraer participantes del estado inicial
  const participanteListContext = useContext(participantesContext);
  const {cerrarModificar, participanteM, modificar, añadirParticipante, modificarParticipante} = participanteListContext;

  let idM = '';
  let nombreM= '';
  let  categoriaM = '';
  let institucionM = '';


 //Si se usa el componente como modificar colocar en el estado los valores anteriores del participante
  if(!añadir){

      idM = participanteM[0]._id;
      nombreM = participanteM[0].nombre ;
      categoriaM = participanteM[0].categoria;
      institucionM = participanteM[0].institucion;
  }

  //crear estado para validar
  const [participante, guardarParticipante] = useState({
    nombre:nombreM,
    categoria:categoriaM,
    institucion:institucionM
  });

  useEffect(()=>{
    guardarParticipante({
      nombre:nombreM,
      categoria:categoriaM,
      institucion:institucionM
    });

  },[participanteM])


  //extraer elementos del estado para colocar en los values de los inputs
  const {nombre,categoria,institucion} = participante;


  //extraer lo que escribe el usuario en cada input y añadirlo al estado 
  const onChangeParticipante = e=> {
      
      guardarParticipante({
        ...participante,
        [e.target.name]: e.target.value

      });
  }

  //Al enviar el form
  const onSubmit= e=>{
    e.preventDefault();

    //Validar form
    if( nombre=='' || categoria=='' || institucion ==''){
      return;
    }

    //Añadir al estado
    if( añadir && modificar ){
      alert('termina de modificar el participante antes de agregar otro')
      return;
    }else{

      if(!añadir){
        modificarParticipante(idM, participante)
        

      }else{
        console.log(participante)
        añadirParticipante(participante);

      }
      
    }

    //Reiniciar form
    guardarParticipante({
      nombre:'',
      categoria:'',
      institucion:''
    })

    if(!añadir){
      cerrarModificar();

    }

  }

  //cancelar la operación
  const cerrarModi=e=>{
    e.preventDefault();
    cerrarModificar();
}

  return (

    <div className={añadir? 'h-screen relative bg-blue-800 px-2 ':'h-screen relative bg-white'}>
      <h1 className={ añadir ?'p-7 text-4xl text-white font-bold':'p-7 text-4xl text-blue-800 font-bold'}>{añadir ? 'Añadir':'Modificar'}</h1>

      <form className='grid  gap-6' onSubmit={onSubmit}>
        <div className='w-full px-2'>
          <label className={añadir ? 'block text-white':'block'}>Nombre:</label>
          <input className={añadir ? 'w-80 p-2 mt-2 border-2 border-white shadow-lg rounded-sm':'w-full p-2 mt-2 border-2 shadow-lg rounded-sm border-blue-800'} 
            placeholder='Nombre del participante'
            name="nombre"
            type='text'
            value={nombre}
            onChange={onChangeParticipante}
          />
        </div>
        <div className='w-full px-2'>
          <label className={añadir ? 'block text-white':'block'}>Categoría:</label>
          <input className={añadir ? 'w-80 p-2 mt-2 border-2 border-white shadow-lg rounded-sm':'w-full p-2 mt-2 border-2 shadow-lg rounded-sm border-blue-800'} 
            placeholder='Categoría participante'
            name="categoria"
            type='text'
            value={categoria}
            onChange={onChangeParticipante}
          />
        </div>
        <div className='w-full px-2'>
          <label className={añadir ? 'block text-white':'block'}>Institución:</label>
          <input className={añadir ? 'w-80 p-2 mt-2 border-2  border-white shadow-lg rounded-sm':'w-full  p-2 mt-2 border-2 shadow-lg rounded-sm border-blue-800'} 
            placeholder='Institución a la que pertenecen'
            name='institucion'
            type='text'
            value={institucion}
            onChange={onChangeParticipante}
          />
        </div>

        <div className='w-full px-2 absolute bottom-5'>
          <input type='submit' value={añadir? 'Añadir':'Modificar'} className={añadir ? 'bg-white rounded-sm cursor-pointer  w-80 p-2 text-blue-800 ':'bg-blue-800 rounded-sm cursor-pointer w-full p-2 text-white    '} />
          {!añadir && <input type='submit' value='Cancelar' onClick={cerrarModi} className= 'bg-red-800 mt-2 rounded-sm cursor-pointer w-full p-2 text-white' />} 
        </div>
      </form>

    </div>
  )
}

export default FormularioP