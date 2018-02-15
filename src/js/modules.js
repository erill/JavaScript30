import { projectId } from 'module.js'; // 99 - projectId is read only

module1: 
export let projectId = 99;


//// 
import { projectId, projectName } from 'module.js'; // 99, project

module1: 
export let projectId = 99;
export let projectName = 'project';


////
import { projectId as id, projectName} from 'module.js'; // 99, project
// id == 99, projectId = undefined. if you declare alias you have to use it

module1: 
export let projectId = 99;
export let projectName = 'project';


////
console.log('1');
import { projectId, projectName } from 'module.js';
console.log('3');

// output: in module, 1, 3
// import statemenst allways get first

module1: 
export let projectId = 99;
export let projectName = 'project';
console.log('in module');


////
import someValue from 'module.js'; // name - without {} import will be looking for export default value
// only one export default can be in module

module1: 
export let projectId = 99;
let name = 'name';
export default projectName;


////
import { default as myName} from 'module.js'; // name 
// only one export default can be in module

module1: 
export let projectId = 99;
let name = 'name';
export default projectName;


////
import someValue from 'module.js'; // undefined

module1: 
let projectId = 99;
let projectName = 'project';
export { projectId, projectName };


////
import someValue from 'module.js'; // 99

module1: 
let projectId = 99;
let projectName = 'project';
export { projectId as default, projectName };


////
import * as someValue from 'module.js'; // { projectId: 99, projectName: 'project' }

module1: 
let projectId = 99;
let projectName = 'project';
export { projectId, projectName };


////
import { project, showProject } from 'module.js';
project.projectId = 8000; // we can change exported object properties
showProject();  // 8000
console.log(project.projectId); // 8000

modul1:
export let project = { projectId: 99 };

export function showProject() {
    console.log(project.projectId);
}

