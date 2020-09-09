import React,  { Component } from "react";
import '../App.css';

export default class Clock extends Component{

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        console.log('props', this.props);
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log('time', time);
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));

        console.log(seconds,minutes,hours,days);
        this.setState({days, hours, minutes, seconds});
    }

   componentWillMount() {
        //runs before the component is rendered to the app
        this.getTimeUntil(this.props.deadline);
   }

   componentDidMount() {
        //runs after the component has completely rendered to the app
       //to update time every 1000 milliseconds / 1 second
       setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
   }

   //add a leading 0 number to hours or days to look uniform
    loading0(num){
        //return num, but check if its less 10 if its less than 10 return 0 plus the num, if its not return only the number
        return num < 10 ? '0' + num : num;
    }

    render() {
        return (
            <div>
                <div className="clock-days">{this.loading0(this.state.days)} days</div>
                <div className="clock-hours">{this.loading0(this.state.hours)} hours</div>
                <div className="clock-minutes">{this.loading0(this.state.minutes)} minutes</div>
                <div className="clock-seconds">{this.loading0(this.state.seconds)} secs</div>
            </div>
        );
    }
}
