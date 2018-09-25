import React from 'react';
import PropTypes from 'prop-types';
import ReportModal from '../ReportModal';

class MovieCard extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            modalClicked:false
        };
        this.handleSort = this.handleSort.bind(this);
        this.cardHide = this.cardHide.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSort (e)  {
        //this.props.filterMovie(e);
        document.getElementById(`${e}`).style.display='block';
        document.getElementById(`${e}`).style.backgroundColor='rgba(0,0,0,0.7)';
    }
    cardHide (e)  {
        document.getElementById(`${e}`).style.display='none';
        document.getElementById(`${e}`).style.backgroundColor='rgba(0,0,0,0)';
    }
    handleOpen(){
        this.setState({modalClicked:true});
    }
    handleClose(){
        this.setState({modalClicked:false});
    }
    render(){
        return(
            <div className="movie-card" onMouseEnter={ () => this.handleSort(this.props.movie.id)} onMouseLeave={() => this.cardHide(this.props.movie.id)}>
                <div className="movie-card card" style={{backgroundImage:`url(${this.props.movie.imageUrl})`,color:'white',maxHeight:380}}>                   
                    <div>
                        <div  className="card-body" >                            
                            <h4 className="card-title" style={{textAlign:'center'}}><i className="fa fa-pie-chart"></i>{this.props.movie.title}</h4>
                            <p className="text-justify" style={{fontSize: '14px',marginTop:100}}>{this.props.movie.description}</p>
                        </div>
                    </div>
                    <div id={this.props.movie.id} className="card-img-overlay" style={{display:'none',textAlign:'center'}}>
                        <button className="card-button" onClick={this.handleOpen}>Open</button>
                        <button className="card-button" onClick={() => window.print()}>Print</button>
                        <button className="card-button" onClick={() => this.props.filterMovie(this.props.movie.id)}>Delete</button>
                    </div>
                </div>
                {this.state.modalClicked &&     
                    <ReportModal 
                        selectedMovieData={this.props.movie}
                        handleClose={this.handleClose}
                    />
                }
            </div>

        );
    }

}

MovieCard.defaultProps = {
    movie: {}
};

MovieCard.propTypes = {
    movie: PropTypes.object,
    filterMovie: PropTypes.func
};

export default MovieCard;