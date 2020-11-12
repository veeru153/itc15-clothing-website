import React, { Component } from 'react';
import Card from '../ClothingCard/Card';
import Popup from '../Popup/Popup';
import classes from './Container.module.css';
import data from './data';

class Container extends Component {
    state = {
        data: data,
        showPopup: false,
        selectedProduct: {},
    }

    showNewData = () => {
        if(this.props.type === 'all') {
            this.setState({ data: data });
        } else {
            const tempData = data.filter(x => x.type === this.props.type);
            this.setState({ data: tempData });
        }
    }

    componentDidMount() {
        this.showNewData();
    }

    showDetails = (val) => {
        this.setState({
            selectedProduct: val === false ? {} : data[val-1],
            showPopup: val === false ? false : true,
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.type !== this.props.type) {
            this.showNewData();
        }
    }

    render() {
        const s = this.state.selectedProduct;
        return (
            <div className={classes.Container}>
                {this.state.showPopup 
                    ? <Popup product={s} showDetails={this.showDetails} /> 
                    : null}
                {this.state.data.map(x => {
                    return <Card 
                        key={x.id}
                        id={x.id}
                        name={x.name} 
                        price={x.price} 
                        type={x.type} 
                        img={x.img} 
                        showDetails={this.showDetails}
                    />
                })}
            </div>
        )   
    }
}

export default Container;