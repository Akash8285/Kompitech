import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

class ReportModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            movieData:{}
        };
    }
    componentDidMount(){
        console.log(this.props.selectedMovieData);
    }
    UNSAFE_componentWillMount() {
        Modal.setAppElement('body');
    }
    render(){
        return(
            <div>
                <Modal
                    isOpen={!!this.props.selectedMovieData}
                    contentLabel="Selected Report"
                    onRequestClose={this.props.handleClose}
                    className="modaldesign"
                >
                    <h3 className="modaldesign__title">{this.props.selectedMovieData.title}</h3>
                    {this.props.selectedMovieData && <p>{this.props.selectedMovieData.description}</p>}
                    <button className="button" onClick={this.props.handleClose}>Okay</button>
                </Modal>
            </div>
        );
    }
}

ReportModal.propTypes = {
    selectedMovieData: PropTypes.object,
    handleClose:PropTypes.func
};

export default ReportModal;