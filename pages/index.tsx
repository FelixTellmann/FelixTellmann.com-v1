import React, { useState } from 'react';
import './index.scss';


/*
https://s2.googleusercontent.com/s2/favicons?domain=www.stackoverflow.com
        chrome.storage.sync.set({key: value}, function() {
          console.log('Value is set to ' + value);        });

        chrome.storage.sync.get(['key'], function(result) {
          console.log('Value currently is ' + result.key);
        });
*/

function Index(ctx) {

  return (
    <div >
      index.tsx
      {/*<Border loading={isLoading} width="6px" duration={4}
              color={`linear-gradient(180deg, ${Theme.colors.accentPrimary}, ${Theme.colors.accentSecondary})`} />
      <header className="popup__section header">
        Felix Tellmann - Web Development
      </header>
      <hr />
      <section className="popup__section shortcuts">
        <button
          onClick={e => chrome.storage?.sync.set({ key: value + 1 }, function () {
            console.log('Value is set to ' + value);
          })}>Up 1
        </button>
        <button onClick={e => chrome.storage.sync.get(['key'], function (r) {
          setValue(r.key);
        })}>get Result
        </button>
        <div>{value}</div>
      </section>*/}
    </div>
  );
}

Index.getInitialProps = async ctx => {
  return {};
};

export default Index;