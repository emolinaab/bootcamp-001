
import { Form } from "./components/Form";
import { LoginContainer } from "./components/LoginContainer";
import { AppTheme } from "./theme";

const App = () => {

  return (
    <AppTheme>
      <LoginContainer>
        <Form />
      </LoginContainer>
    </AppTheme>
  );
};

export default App;
