import React, { useState } from "react";

import AutoAnimateHeight from "react-auto-animate-height";

const App = () => {
  const [ isExpanded, setIsExpanded ] = useState<boolean>(false);
  return (
    <div className={ "container" }>
      <button className={'button'} onClick={ () => setIsExpanded(!isExpanded) }>Toggle</button>

      <div className={ "card" }>
        <AutoAnimateHeight
          duration={'200ms'}
        >
          <div style={{ padding: 20 }}>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.</div>
            { isExpanded && <div>
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt.
            </div> }
          </div>
        </AutoAnimateHeight>
      </div>

    </div>
  );
};

export default App;
