var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few locations to try out: </p>
      <ol>
        <li>
          <Link to="/?=location=Monroe NY">Monroe, NY</Link>
        </li>
        <li>
          <Link to="/?=location=Barcelona, Spain">Barcelona, Spain</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
