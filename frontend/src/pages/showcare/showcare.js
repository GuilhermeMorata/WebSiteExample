import Header from './components/header/header'
import Infocard  from './components/infocard/infocard'
import Introtext from './components/intro/introtext'
import Products from './components/product/products'
import About from './components/about/about'
import Contant from './components/contant/contant'
import Footer from './components/footer/footer'


function Showcare(){
    return(
    <>
        <Header/>
        <Infocard/>
        <Introtext/>
        <Products/>
        <About/>
        <Contant/>
        <Footer/>
    </>
    )
}


export default Showcare;

