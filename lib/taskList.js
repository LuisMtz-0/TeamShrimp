const Component = require('./component.js');

class EmployeeList extends Component {
  constructor(children) {
    super(children);

  }
  render() {
    return `
    <body class=" h-screen">
    <div class="h-1/6 w-full flex bg-rose-800 text-white text-4xl items-center justify-center">
      <div class="">My Team</div>
    </div>
    <div class="bg-white w-4/5 h-5/6 mx-auto flex flex-wrap">
       ${this.renderInnerHtml()}  
    </div>
  </body>
 `;
  }
}
{/* <ul class="tasks">${this.renderInnerHtml()}</ul> */}
module.exports = EmployeeList;
