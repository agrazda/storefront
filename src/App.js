import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Categories from './components/Categories';
import { connect } from 'react-redux';

function App(props) {
  return (
    <>
      <Header/>

      <Products />  

      <Categories />

      <Footer />
    </>  
  );
}

// layer the state to props
const mapStateToProps = state => {
  return {
    votes: state.votes,
  }
}

// this allows actions to be pumped through our reducer.
const mapDispatchToProps = dispatch => ({
  increment: (name) => dispatch({type: 'ADD_VOTE', payload: name}),
  reset: () => dispatch({ type: 'RESET_VOTES' })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
