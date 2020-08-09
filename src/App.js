import React, { Component } from 'react'
import './vendor/bootstrap/css/bootstrap.css'
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields : {
        name:'',
        email:''
      },
      people:[],
      UpdateID:null,
    }
    this.onInputChange= this.onInputChange.bind(this)
    this.onDataClick=this.onDataClick.bind(this)
    this.onAddClick=this.onAddClick.bind(this)
    this.onDeleteClick=this.onDeleteClick.bind(this)
  }

  onInputChange(evt) {
    const fields = this.state.fields;
    fields[evt.target.name]=evt.target.value;
    this.setState({fields})
  }
  onAddClick=  (evt) => {
    const people = [
      ...this.state.people,
      this.state.fields,
    ]
    console.log(people)
    this.setState({
      people,
      fields: {
        name:'',
        email:''
      },
      UpdateID:null,
    },()=>console.log(this.state))
    evt.preventDefault()
  }
  onUpdateClick =  (evt) => {
    
    this.setState(prevState =>{
      const myPeople = prevState.people.slice()
      const mySelectedIndex = prevState.UpdateID
      myPeople[mySelectedIndex].name=this.state.fields.name
      myPeople[mySelectedIndex].email=this.state.fields.email
      return {
        fields: {
          name:'',
          email:''
        },
        people:myPeople,
        UpdateID:null,
      }
    })
    evt.preventDefault();   
  }
  onDeleteClick =  (evt) => {
    
    this.setState(prevState =>{
      const myPeople = prevState.people.slice()
      const mySelectedIndex = prevState.UpdateID
      myPeople.splice(mySelectedIndex)
      console.log(myPeople)
      return {
        fields: {
          name:'',
          email:''
        },
        people:myPeople,
        UpdateID:null,
      }
    })
    evt.preventDefault();   
  }
    
  onDataClick (i,event){

  event.preventDefault();

    this.setState(prevState => {
    return {
      people:prevState.people,
      fields:{
        name:this.state.people[i].name,
        email:this.state.people[i].email
      },
      UpdateID:i,
    }
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              placeholder="Name" 
              value={this.state.fields.name} 
              onChange={this.onInputChange}/>
          </div>

          <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              placeholder="Email" 
              value={this.state.fields.email} 
              onChange={this.onInputChange}/>
          </div>
          
          <br />

          <button style={{margin:"1rem"}} onClick={this.onAddClick} className="btn btn-primary">Add</button>
          <button style={{margin:"1rem"}} onClick={this.onUpdateClick} className="btn btn-primary">Update</button>
          <button style={{margin:"1rem"}} onClick={this.onDeleteClick} className="btn btn-primary">Delete</button>
          <br />
          <h1>{this.state.name}</h1>
        </form>

        <div>
          <h3>People</h3>


          <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>              
            </tr>
          </thead> 
          <tbody>           
            {this.state.people.map(({name,email},i)=>              
              <tr key={i} onClick={(e)=>this.onDataClick(i,e)}>
                <th scope="row">{i}</th>
                <td>{name}</td>
                <td>{email}</td>              
              </tr>               
            )}
          </tbody>
          </table>
        </div>
      </div>
    )
  }
}








/*



onUpdateClick =  (evt) => {
    
    this.setState(prevState =>({
let NewPeople = prevState.people.map(i=>console.log(prevState.people[i]))

      people:[...prevState.people],
      UpdateID:null,
      fields:{
        name:'',
        email:''
      }
    }))

      evt.preventDefault()
    }


*/