{
    // discriminated --> 차별화
    // function: login -> success, fail ⏱

    type SuccessState = {
      result: 'success';
      response: {
        body: string;
      };
    };
    type FailState = {
      result: 'fail';
      reason: string;
    };
    // result 라는 동일한 key가 있지만 state에 따라 값이 다름
    type LoginState = SuccessState | FailState;
  
    function login(): LoginState {
      return {
        result: 'success',
        response: {
          body: 'logged in!',
        },
      };
    }
  
    // printLoginState(state: LoginState)
    // success -> 🎉 body
    // fail -> 😭 reason
    function printLoginState(state: LoginState) {
      if (state.result === 'success') {
        console.log(`🎉 ${state.response.body}`);
      } else {
        console.log(`😭 ${state.reason}`);
      }
    }
  }
  