function Filter({ filter, setFilter, setSort }) {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <p>Status:</p>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">Todas</option>
          <option value="Completed">Completadas</option>
          <option value="Incompleted">Incompletas</option>
        </select>
      </div>
      <div>
        <p>Ordem Alfabética</p>
        <button onClick={() => setSort("A a Z")}>A a Z</button>
        <button onClick={() => setSort("Z a A")}>Z a A</button>
      </div>
    </div>
  );
}

export default Filter;
