import { useState } from "react";

import "./App.css";
import Connections from "./components/Connections/Connections";
import Messages from "./components/Messages/Messages";

// images
import carla from "./assets/images/carla.png";
import anderson from "./assets/images/anderson.png";
import gina from "./assets/images/gina.png";
import lutz from "./assets/images/lutz.png";
import hannah from "./assets/images/hannah.png";
import Badge from "./components/Badge/Badge";

function App() {
  let [friends, setFriends] = useState([
    { userName: "Carla", userImage: carla, notification: "4", time: "3:32pm" },
    {
      userName: "Anderson",
      userImage: anderson,
      notification: "4",
      time: "3:32pm",
    },
    { userName: "Gina", userImage: gina, notification: "4", time: "3:32pm" },
    { userName: "Lutz", userImage: lutz, notification: "1", time: "3:32pm" },
    { userName: "Hannah", userImage: hannah },
  ]);
  // let friends = ;

  const [searchInput, setSearchInput] = useState("");
  const [filteredFriends, setFilteredFriends] = useState();

  const handleSearch = (input) => {
    setSearchInput(input);

    const filtered = friends.filter((friend) => {
      if (input === "") return friend;
      return friend.userName.toLowerCase().includes(input);
    });
    console.log(filtered);
    setFilteredFriends(filtered);
  };

  // if (searchInput !== "") {
  //   handleSearch(searchInput);
  // }

  return (
    <div className="App">
      <div className="container">
        <div className="new-connections">
          <div>
            <span>New Connections</span>
            <Badge notification={0} orange={true} />
          </div>
          <div className="users">
            <Connections
              userName={"person 1"}
              userImage={anderson}
              indicator={true}
            />
            <Connections
              userName={"person 1"}
              userImage={carla}
              indicator={true}
            />
            <Connections userName={"person 1"} userImage={gina} />
            <Connections userName={"person 1"} userImage={lutz} />
            <Connections userName={"person 1"} userImage={hannah} />
          </div>
        </div>
        <div className="messages">
          {/* <div className="messages-container"> */}
          <div className="top-bar">
            <div>
              <span>Messages</span> <Badge notification={0} orange={true} />
            </div>
            <div className="search-bar">
              <label>
                <i class="fa-solid fa-magnifying-glass"></i>
              </label>
              <input
                placeholder="Search"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="messages-container">
            {/* <Connections /> */}
            {searchInput
              ? filteredFriends &&
                filteredFriends.map((friend) => (
                  <Messages
                    userName={friend.userName}
                    message={"tesigng message lorem"}
                    userImage={friend.userImage}
                    notification={friend.notification}
                    time={friend.time}
                  />
                ))
              : friends.map((friend) => (
                  <Messages
                    userName={friend.userName}
                    message={"tesigng message lorem"}
                    userImage={friend.userImage}
                    notification={friend.notification}
                    time={friend.time}
                  />
                ))}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
