var React=require('react')

var Display=React.createClass({
getInitialState:function(){
  return ({data:[],url:"http://localhost:8080/movie/favmovie"})
},
  CreateAjax:function()
  {
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      type: 'POST',
      data: this.props.search1,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render:function(){

    return(
      <div className="content">
       <div className="row" >
            <div className="col-sm-4">
              <div className="thumbnail">
              <img src={this.props.search1.Poster} alt="image"/>

               </div>
            </div>
            <div className="col-sm-8">
                <h2>Movie Title :{this.props.search1.Title}</h2>
                <h3>Year:{this.props.search1.Year}</h3>
                <h3>imdbId:{this.props.search1.imdbID}</h3>
                <button type="submit" className="btn btn-default" onClick={this.CreateAjax} >Add to favourites</button>
              </div>
           </div>
        </div>
    

    )

    }

})
module.exports=Display;
