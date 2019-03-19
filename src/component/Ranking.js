import React, {Component} from "react"; 

class Ranking extends Component {

    constructor () {
      super();
      this.state = {
        test: [],
        odi: []
      }
   
    }
  
    componentDidMount (){

       document.title = "Ranking | Men's National Team"
  
      const newsUrl = "http://cricplatoon.xyz/web/?TEST";
  
      fetch(newsUrl, {            
        method: 'GET',
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          test: response
        })
      })

      const odiUrl = "http://cricplatoon.xyz/web/?ODI";
  
      fetch(odiUrl, {            
        method: 'GET',
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          odi: response
        })
      })
     
    }

   
    
   
    render() {

    let test = this.state.test; 
    let odi = this.state.odi; 
   
    let odiLoop = odi.map((post, index)=> {
        return (
                   
            
                <tr>
                  <td>{post.currentRank}</td>
                  <td>{post.name}</td>
                  <td>{post.currentPoints}</td>
                  <td>{post.currentRating}</td>
                </tr>
               
             
  
        )
      })

      let testLoop = test.map((post, index)=> {
        return (
                   
            
                <tr>
                  <td>{post.currentRank}</td>
                  <td>{post.name}</td>
                  <td>{post.currentPoints}</td>
                  <td>{post.currentRating}</td>
                </tr>
               
             
  
        )
      })
      


  
      return (
        
  
        <div className="container">
          
        <div className="heading">
         <h2>Ranking</h2>
         <hr/>
         </div>



         <div className="container">
         <h4>TEST</h4>
         <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team Name</th>
                  <th>Current Point</th>
                  <th>Current Rating</th>
                </tr>
              </thead>

              <tbody>{testLoop}</tbody>
               
               
            </table>
         </div>

         <div className="container">
         <h4>ODI</h4>
         <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team Name</th>
                  <th>Current Point</th>
                  <th>Current Rating</th>
                </tr>
              </thead>

              <tbody>{odiLoop}</tbody>
               
               
            </table>
         </div>




        </div>
  
      );
    }
  }

export default Ranking;  