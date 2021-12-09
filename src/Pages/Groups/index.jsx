import { useState, useEffect, useContext } from "react";

import { GroupsContext } from "../../Providers/groups";

import GroupList from "../../Components/GroupList";
import AddGroupsModal from "../../Components/AddGroupsModal";

const Groups = () => {
  const { groups, getUserGroups, searchGroups } = useContext(GroupsContext);

  const [token] = useState(localStorage.getItem("@Habits:token"));
  const [rendered, setRendered] = useState(false);
  const [modalCreateGroup, setModalCreateGroup] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getUserGroups(token);
    setRendered(true);
  }, [token]);

  const handleClickCreate = () => {
    setModalCreateGroup(true);
  };

  const handleClickSearch = () => {
    searchGroups(searchInput, token);
  };

  return (
    <div>
      <h3>GROUPS</h3>
      <button onClick={() => handleClickCreate()}>Crie um novo grupo</button>
      <div>
        <button onClick={() => handleClickSearch()}>Buscar grupos</button>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Busca"
        />
      </div>
      <div>
        <h3>Seus grupos:</h3>
        {rendered ? (
          groups.length > 0 ? (
            <GroupList />
          ) : (
            <h2>Adicione grupos!</h2>
          )
        ) : null}
      </div>
      <AddGroupsModal
        modalCreateGroup={modalCreateGroup}
        setModalCreateGroup={setModalCreateGroup}
        token={token}
      />
    </div>
  );
};

export default Groups;