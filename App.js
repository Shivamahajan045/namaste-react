
const parent = React.createElement("div", {id: "parent"}, 
                [React.createElement("div", {id: "child1"}, 
                    [React.createElement("h1", {id: "heading1"}, "Hi, I'm h1 heading!"),
                      React.createElement("h2", {id: "heading2"}, "Hi, I'm h2 heading!")]),
                        React.createElement("div", {id: "child2"}, 
                          [React.createElement("h1", {id: "heading1"}, "Hi, I'm h1 heading!"),
                            React.createElement("h2", {id: "heading2"}, "Hi, I'm h2 heading!")])
                          ]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);


