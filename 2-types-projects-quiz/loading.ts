{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: 'loaded';
    };
  };

  type FailState = {
    state: 'fail';
    reason: 'no network';
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;
3
  function printLoginState(resource:ResourceLoadState) {
    switch (resource.state) {
      case 'loading':
        console.log(`👀 loading...`);
        break;
      case 'success':
        console.log(`😃 ${resource.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${resource.reason}`);
        break;
      default:
        throw new Error(`unknown`);
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
