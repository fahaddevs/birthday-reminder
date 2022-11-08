const List = ({people}) => {
  return (
    <>
      <ul>
        {people.map((person)=>{
          const {id, name, age, image} = person;
          return (
            <li key={id} className='flex mt-6'>
              <img src={image} alt="person image" className="w-1/6 h-16 object-cover" />
              <div className="w-5/6 pl-4">
                <h4 className="font-medium text-xl">{name}</h4>
                <p>{age}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default List;