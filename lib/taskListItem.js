const Component = require('./component.js');

class EmployeesInfo extends Component {
  constructor(children, position, Id, uniqueData, email) {
    super(children);
    this.Id = Id;
    this.position = position;
    this.uniqueData = uniqueData;
    this.email = email;
  }
  render() {
    let gitLink = ""
    let uniqueEl = ""
    let classNames = 'text-xl m-1';
    if (this.position == 'Engineer') {
      uniqueEl = `GitHub: ${this.uniqueData}`
      gitLink = ` https://github.com/${this.uniqueData}`
    }else if(this.position == 'Manager'){
      uniqueEl = `Office Number: ${this.uniqueData}`
    }else if (this.position == 'Intern'){
      uniqueEl= `School: ${this.uniqueData}`
    }
    return `
    <div class="bg-gray-200 border border-slate-500 shadow-2xl h-1/2 w-1/4 m-3 rounded-xl">
    <div class="bg-blue-600 text-white h-fit text-2xl rounded-t-xl">
    <div class="flex mx-4">
      <div>${this.renderInnerHtml()} <br> ${this.position}</div>
    </div>
  </div>
  <div class="w-full h-5/6 text-black flex items-center justify-center">
    <div class="divide-y divide-slate-700 bg-white w-fit h-fit">
  <div class="${classNames}">Id: ${this.Id}</div>
    <div><a class="${classNames}" href=mailto:"${this.email}">Email: ${this.email}</a></div>
   <div> <a class="${classNames}" href=${gitLink}>${uniqueEl}</a></div>
    </div>
    </div>
    </div>
    `;
    
  }
  
}

module.exports = EmployeesInfo;
