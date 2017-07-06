import * as React from 'react';

interface StateProps {
  errors: any;
}

const ListErrors: React.StatelessComponent<StateProps> = ({ errors }) => {
  if (errors) {
    return (
      <ul className="error-messages">
        {Object.keys(errors).map((key: string) =>
          <li key={key}>
            {key} {errors[key]}
          </li>,
        )}
      </ul>
    );
  } else {
    return null;
  }
};

export default ListErrors;
