const NamesList = ({ names }) => {
  return (
    <datalist className='name-list' id='names-list'>
      {names.map((food) => (
        <option key={food.id}>{food.description}</option>
      ))}
    </datalist>
  );
};

export default NamesList;
