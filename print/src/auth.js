import { Component } from 'react'
import { connect } from 'react-redux'


export default function(LoadThisComp) {
    
    class Auth extends Component {
       
        
        constructor(props) {
            super(props)

            if (!this.props.loggedin) {
                this.props.history.push('/login')
            }
        }

            render () {
                return <LoadThisComp {...this.props} />
            }
    }

    const mapStateToProps = (state) => {
        return {
            loggedin: state.loggedin
        }
    }


return connect(mapStateToProps)(Auth)

}
