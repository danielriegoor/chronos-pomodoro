// PascalCase para componentes React

import { useEffect } from 'react';
import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';
import { showMessage } from '../../adapters/showMessage';

export function Home() {
  useEffect(() => {
    document.title = 'Chronos Pomodoro';
    return () => {
      showMessage.dismiss();
    };
  }, []);
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
