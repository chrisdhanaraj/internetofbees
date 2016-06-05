import React from 'react';
import './styles.scss';


const TitleCreate = (props) => {
  return (
    <div className="title-create-add">
      <h1 className="title-create-add__header">Apiaries</h1>
      {(() => {
        if (this.props.button) {
          return (
            <div className="title-create-add__button">
              <p>Add an {props.buttonText} <i className="fa fa-plus-circle" aria-hidden="true"></i></p>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default TitleCreate;
