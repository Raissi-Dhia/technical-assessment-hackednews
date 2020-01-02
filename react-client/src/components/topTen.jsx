import React from 'react';
import $ from 'jquery'; 
// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.

// class TopTen extends React.Component{
//   constructor(props) {
//     super(props); 
  //   this.state = {
  //     Title: "",
  //     author :"" ,
  //     Score: ""
  //   };
  //   this.updateState = this.updateState.bind(this);
  // }
  // updateState(data) {
  //   this.setState({ 
  //   Title: data.title,
  //   author : data.author ,
  //   Score: data.score
  //   });
  //  }

  // displayStories() {
  //   $.ajax({
  //     url: '/',
  //     method: 'GET',
  //     success: function(data) {
  //       this.setState({stories :data});
  //     },
  //     error: function(err) {
  //       console.log(error);
  //     }
  //   });
  // }
  const TopTen = props => (

  <div>
  <h1> Top Ten Stories </h1>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map((element, i) => {
        return(
            <tr key= {i}>
                <td>{element.title}</td>
                <td>{element.by}</td>
                <td>{element.score}</td>
            </tr>

        )
      })}
    
    </tbody>
  </table>
</div>
);

export default TopTen;