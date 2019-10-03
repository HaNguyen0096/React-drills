import React, { Component } from 'react'
import './Accordion.css'

export default class Accordion extends Component {
    static defaultProps={ sections: [] };
    state = {
        currentState: 0
    };

    handleActiveSection(index) {
        this.setState({ currentState: index })
    }

    renderButtons(){
        return this.props.sections.map((section, index) => (
            
              <li key={index}>
                <button onClick={() => this.handleActiveSection(index)}>
                  {section.title}
                </button>  
              </li>
        ))    
    }

    renderContent() {
        const currentSection = this.props.sections[this.state.currentState]
        return (
          <div>
            {currentSection.content}
          </div>
        )
      }

    render(){

        return(
            <ul>
                {this.renderButtons()}
                {this.props.sections.length && this.renderContent()}
            </ul>
        )
    }
}