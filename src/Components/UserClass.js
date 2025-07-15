import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  //   console.log(props);li
  // }

  render() {
    // destructuring we are doing

    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        {/* <h2>Count:{this.state.count}</h2> */}
        <h2>Count:{count}</h2>
        {/* <h2>Count2:{count2}</h2> */}
        {/* <h2>Name : {this.props.name}</h2>
        <h2>Location:{this.props.location}</h2> */}
        <h2>Name : {name}</h2>
        <h2>Location:{location}</h2>
      </div>
    );
  }
}

export default UserClass;
