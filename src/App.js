import React, {Component} from 'react';




class App extends Component {
    constructor(){
        super()
        this.state = {
            number: '',
            answer: ''
        }
    }

    inputChange = (event) => {
        this.setState({number: event.target.value})
    }

    // The code to talk to the server, but it can't because of chrome security;
    // Fetches = () => {
    //     fetch(`http://localhsot:3001/person/`+ this.state.number)
    //     .then(response => response.json())
    //     .then(val1, val2 => {
    //         fetch(`http://localhsot:3001/facility/`+ val1)
    //         .then(response => response.json())
    //         .then(val3, val4 => val3);
    //         fetch(`http://localhsot:3001/exposure/`+ val2)
    //         .then(response => response.json())
    //         .then(val5 => val5);
    //          alert("Answer is: " + val3*val5)
    //     }  
    // }
    // Code below imitates server response

    mockFetches = () => {
        const jas1 = JSON.stringify({
            "val1": Number(this.state.number)+1,
            "val2": Number(this.state.number)-2
        })
        const jas2 = JSON.stringify({
            "val3": Number(this.state.number)-2,
            "val4": Number(this.state.number)+5
        })
        const jas3 = JSON.stringify({
            "val5": Number(this.state.number)+8
        })
        const promise1 = new Promise(resolve => {
            setTimeout(() => resolve(JSON.parse(jas1)), 100)
        });
        const promise2 = new Promise(resolve => {
            setTimeout(() => resolve(JSON.parse(jas2)), 100)
        });
        const promise3 = new Promise(resolve => {
            setTimeout(() => resolve(JSON.parse(jas3)), 100)
        });

        Promise.all([promise1, promise2, promise3])
            .then(result => alert("Answer is: " + (result[1].val3 * result[2].val5)))

    }

    render(){
        return (
            <div className='pa7 tc v-mid gradient-lily'>
                <div className='pa2'>
                    <input
                        onChange={this.inputChange} 
                        className='pa3 ba b--green bg-lightest-blue' 
                        type='text' 
                        placeholder='Please enter a number'
                        maxLength='10'
                    />
                </div>
                <div className='pa2'>
                    <button 
                        className='pa2 b--green grow br2 ba b--green bg-blue'
                        disabled={!Number(this.state.number)}
                        onClick={this.mockFetches}
                        >
                        Get result!
                    </button>
                </div>
            </div>
        );
    }
}

export default App;