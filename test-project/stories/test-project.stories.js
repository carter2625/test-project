import { html } from 'lit';
import '../src/test-project.js';

export default {
  title: 'TestProject',
  component: 'test-project',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <test-project
      style="--test-project-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </test-project>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
