import React, { useState, useEffect } from 'react';
import LoadingMask from './LoadingMask';
const Form = (props) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [sentForm, setSentForm] = useState(false);
  const [showSub, setShowSub] = useState(true);
  const inputChange = (e) => {
    setInput(e.target.value);
  };
  const postData = () => {
    setLoading(true);
    setShowForm(false);
    fetch('../api/hotels/subscribe', {
      method: 'post',
      body: JSON.stringify({
        email: input,
        hotel: props.name,
      }),
    })
      .then((res) => res.json())
      .then((res) => setResponse(res.success))
      .then(() => setLoading(false))
      .then(() => setSentForm(true))
      .then(
        setTimeout(function () {
          setShowSub(false);
        }, 5000)
      );
  };
  console.log(input, props.name, response);
  return (
    <>
      {showSub && (
        <div>
          {showForm ? (
            <form>
              <label>Requst more info about</label>
              <label>
                {props.name}
                <input type='text' name='name' onChange={inputChange} />
              </label>
              <button
                type='button'
                onClick={postData}
                disabled={
                  input.includes('@') && input.includes('.') ? false : true
                }
              >
                Send
              </button>
            </form>
          ) : (
            ''
          )}

          {loading ? <LoadingMask /> : ''}
          {response
            ? 'Success'
            : !response &&
              sentForm &&
              input === 'a@b.c' &&
              props.name === 'Hotel Curabitur suscipit suscipit'
            ? 'Already Subscribed'
            : ''}
        </div>
      )}
    </>
  );
};

export default Form;
