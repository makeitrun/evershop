import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import './LoginForm.scss';
import Area from '@components/common/Area';

export default function LoginForm({ authUrl, dashboardUrl }) {
  const [error, setError] = React.useState(null);

  const onSuccess = (response) => {
    if (!response.error) {
      window.location.href = dashboardUrl;
    } else {
      setError(response.error.message);
    }
  };

  return (
    <div className="admin-login-form">
      <div className="flex items-center justify-center mb-12">
        <svg
          width="150"
          height="150"
          viewBox="0 0 128 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64 0C28.8 0 0 28.8 0 64C0 99.2 28.8 128 64 128C99.2 128 128 99.2 128 64C128 28.8 99.2 0 64 0ZM64 120C34.8 120 8 93.2 8 64C8 34.8 34.8 8 64 8C93.2 8 120 34.8 120 64C120 93.2 93.2 120 64 120Z"
            fill="#008060"
          />
          <path
            d="M64 24C53.6 24 44.8 33.6 44.8 44.8C44.8 55.2 53.6 64 64 64C74.4 64 83.2 55.2 83.2 44.8C83.2 33.6 74.4 24 64 24ZM64 56C58.4 56 53.6 51.2 53.6 44.8C53.6 38.4 58.4 33.6 64 33.6C69.6 33.6 74.4 38.4 74.4 44.8C74.4 51.2 69.6 56 64 56Z"
            fill="#008060"
          />
          <path
            d="M64 72C50.4 72 40 82.4 40 96C40 109.6 50.4 120 64 120C77.6 120 88 109.6 88 96C88 82.4 77.6 72 64 72ZM64 112C54.4 112 48 105.6 48 96C48 86.4 54.4 80 64 80C73.6 80 80 86.4 80 96C80 105.6 73.6 112 64 112Z"
            fill="#008060"
          />
          <path
            d="M64 80C60 80 56.8 83.2 56.8 87.2C56.8 91.2 60 94.4 64 94.4C68 94.4 72.8 91.2 72.8 87.2C72.8 83.2 68 80 64 80Z"
            fill="#008060"
          />
        </svg>
      </div>
      {error && <div className="text-critical py-4">{error}</div>}
      <Form
        action={authUrl}
        method="POST"
        id="adminLoginForm"
        isJSON
        onSuccess={onSuccess}
        btnText="SIGN IN"
      >
        <Area
          id="adminLoginForm"
          coreComponents={[
            {
              component: {
                default: Field
              },
              props: {
                name: 'email',
                type: 'email',
                label: 'Email',
                placeholder: 'Email',
                validationRules: ['notEmpty', 'email']
              },
              sortOrder: 10
            },
            {
              component: {
                default: Field
              },
              props: {
                name: 'password',
                type: 'password',
                label: 'Password',
                placeholder: 'Password',
                validationRules: ['notEmpty']
              },
              sortOrder: 20
            }
          ]}
          noOuter
        />
      </Form>
    </div>
  );
}

LoginForm.propTypes = {
  authUrl: PropTypes.string.isRequired,
  dashboardUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export const query = `
  query Query {
    authUrl: url(routeId: "adminLoginJson")
    dashboardUrl: url(routeId: "dashboard")
  }
`;
