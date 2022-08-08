import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "./App.css";

//Importing custom components
import Connections from "./components/Connections/Connections";
import Messages from "./components/Messages/Messages";

// Importing imgages
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
    { userName: "karla", userImage: carla, notification: "4", time: "3:32pm" },
    {
      userName: "Gnderson",
      userImage: anderson,
      notification: "4",
      time: "3:32pm",
    },
    { userName: "Dina", userImage: gina, notification: "4", time: "3:32pm" },
    { userName: "Mutz", userImage: lutz, notification: "1", time: "3:32pm" },
    { userName: "Lannah", userImage: hannah },
  ]);

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

  return (
    <div className="App">
      <div className="container">
        <div className="new-connections">
          <div>
            <span className="heading-1">New Connections</span>
            <Badge notification={2} orange={true} />
          </div>
          <ScrollContainer horizontal={true} vertical={false} className="users">
            <Connections
              userName={"andrew"}
              userImage={anderson}
              indicator={true}
            />
            <Connections userName={"gina"} userImage={carla} indicator={true} />
            <Connections userName={"ria"} userImage={gina} />
            <Connections userName={"jake"} userImage={lutz} />
            <Connections userName={"ross"} userImage={hannah} />
          </ScrollContainer>
        </div>
        <div className="messages">
          <div className="top-bar">
            <div>
              <span className="heading-2">Messages</span>{" "}
              <Badge notification={1} orange={true} />
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
            {searchInput
              ? filteredFriends &&
                filteredFriends.map((friend) => (
                  <Messages
                    userName={friend.userName}
                    message={"drag to scroll connections"}
                    userImage={friend.userImage}
                    notification={friend.notification}
                    time={friend.time}
                  />
                ))
              : friends.map((friend) => (
                  <Messages
                    userName={friend.userName}
                    message={"drag to scroll connections"}
                    userImage={friend.userImage}
                    notification={friend.notification}
                    time={friend.time}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
