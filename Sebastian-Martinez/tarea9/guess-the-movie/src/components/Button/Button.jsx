import styled from "styled-components";

const PrincipalButton = styled.button`
  height: 36px;
  width: 100px;
  border: none;
  background: #4776e6; 
  background: -webkit-linear-gradient(
    to right,
    #8e54e9,
    #4776e6
  ); 
  background: linear-gradient(
    to right,
    #8e54e9,
    #4776e6
  );

  cursor: pointer;
  color: white;
    border-radius: 15px;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
        background: -webkit-linear-gradient(
    to left,
    #8e54e9,
    #4776e6
  ); 
  background: linear-gradient(
    to left,
    #8e54e9,
    #4776e6
  );
    }
`;

const Button = ({ onClick, text }) => {
  return <PrincipalButton onClick={onClick}>{text}</PrincipalButton>;
};

export default Button;
