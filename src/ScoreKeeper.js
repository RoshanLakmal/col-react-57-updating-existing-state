import React, {Componet, Component} from 'react';

class ScoreKeeper extends Component{
    constructor(props){
        super(props);
        this.state = {score : 0};
        this.singleKill = this.singleKill.bind(this);
        this.thripleKill = this.thripleKill.bind(this);
    }

    singleKill(){
        this.setState({score: this.state.score + 1});
    }

    /* Only add the last one Score = 4*/
    // thripleKill(){
    //     this.setState({score: this.state.score + 1});
    //     this.setState({score: this.state.score + 1});
    //     this.setState({score: this.state.score + 4});
    // }

    /* Only add the last one Score = 150*/
    // thripleKill(){
    //     this.setState({score: 100});
    //     this.setState({score: 150});
    // }

     /* Good way to do it*/
    // thripleKill(){
    //     this.setState(st => 
    //         {return {score: st.score + 1}
    //     });
    //     this.setState(st => 
    //         {return {score: st.score + 1}
    //     });
    //     this.setState(st => 
    //         {return {score: st.score + 1}
    //     });
    // }

    /* The best way to do it*/
    increamentScore(curState){
        return { score: curState.score + 1};
    }

    thripleKill(){
        this.setState(this.increamentScore);
        this.setState(this.increamentScore);
        this.setState(this.increamentScore);
    }
    render(){
        return(
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill</button>
                <button onClick={this.thripleKill}>Tripple Kill</button>
            </div>
        )
    }
}

export default ScoreKeeper;