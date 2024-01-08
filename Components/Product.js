import React from 'react'

class Product extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            ProductId: 0,
            qty: 0
        }
    }
    Addtocart = (pid) => {
        this.setState({
            ProductId: pid,
            qty: this.state.qty + 1

        });


    }

    render() {
        return (
            <div>

                <button onClick={() => { this.Addtocart(10)}}>Add to cart</button>
                <h1>Qty  {this.state.qty}</h1>
                <h1>Product id  {this.state.ProductId}</h1>
                <Cart ProductId= {this.state.ProductId} qty={this.state.qty} />
            </div>
        )
    }
};

export default Product;

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            qty: this.props.qty,
            ProductId: this.props.ProductId,
        }

     
    }
    // static getDerivedStateFromProps(state, props) {
    //     console.log(state.qty);
    //     console.log(props.qty);
    //     if (props.qty !== state.qty) {
    //         return { qty: props.qty };
    //     }
    //     return null;
    // }
   
    componentDidUpdate(){
     console.log("vlaue updated");
    }

    render() {
        // console.log(this.props.Productid)
        
        return (
            <div>
                <h1> cart qty {this.props.qty}</h1>
                <h1> cart Product id {this.props.ProductId}</h1>
                {/* <button onClick={this.click}>submit</button> */}
            </div>
        )
    }
};

