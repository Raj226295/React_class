import React, {Component} from 'react';
class PropsComponent extends Component{
    render(){
        return(
            <>
            <div className="user-card">
                <img src="https://www.freepik.com/free-vector/elegant-merry-christmas-greeting-text-background_3591314.htm#fromView=keyword&page=1&position=4&uuid=051d716e-cfce-4c5d-9bea-7db99ecd193c&query=Happy+merry+christmas" alt="" />
                <button>{this.props.button_txt}</button>
            </div>
            </>
        )
    }
}
export default PropsComponent;