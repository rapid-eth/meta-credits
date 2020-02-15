/**
 * @function enhanceActions
 * @description Wrap extenion actions with dispatch
 */
export const enhanceActions = (extensions, dispatch) => {
  let actions = {};
  extensions.map(extension => {
    if (extension.actions) {
      return Object.keys(extension.actions).forEach(action => {
        actions[action] = extension.actions[action](dispatch);
      });
    }
  });
  return actions;
};

export const enhanceSystemActions = (actionList, state, dispatch) => {
  let actions = {};
  Object.keys(actionList).forEach(action => {
    actions[action] = actionList[action](dispatch);
  });
  return actions;
};
