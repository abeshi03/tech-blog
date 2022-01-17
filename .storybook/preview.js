import "../src/assets/styles/global/global.scss"
import "../src/assets/styles/global/mixins/mixins.scss"
import "../src/assets/styles/global/valiables/valiables.scss"
import "../src/assets/styles/global/reset.scss"

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      parameters,
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};
