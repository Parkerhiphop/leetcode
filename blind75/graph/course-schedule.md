# [207. Course Schedule](https://leetcode.com/problems/course-schedule/)

<!-- TODO: Read & Write Again -->

## Solution: Simple DFS

```js
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
let visiting;   // is being explored
let visited;  // is already explored
let graph;

var canFinish = function(numCourses, prerequisites) {
    graph = new Map();
    visiting = new Set();
    visited = new Set();
    
    for(let [v, e] of prerequisites){
        if(graph.has(v)){
            graph.set(v, [...(graph.get(v) || []), e])
        }else{
            graph.set(v,[e]);
        }
    }
    
    for(const [v,e] of graph){
        if(isCycleDFS(v)){
            //if cyclic it will not finish so it is false
            return false;
        }
    }
    
    return true;
};

    const isCycleDFS = function(v){
        visiting.add(v);
        // get all the edges to explore
        let edges = graph.get(v);

        if(edges){
           for(let e of edges){
                //skip if it is explored already
                if(visited.has(e)){
                    continue;
                }

                //found e is being explored
                if(visiting.has(e)){
                    return true;
                }

                // DFS deeper if this e is cyclic
                if(isCycleDFS(e)){
                    return true;
                }
            } 
        }   

        // remove from visiting set when all decedant v are visited
        visiting.delete(v);
        visited.add(v);
        return false;
    }
```

## Solution: DFS 2

```js
const getPreReqsPerCourse = (numCourses, prerequisites) => {
    
    const prereqsPerCourse = [];                                               
    
    for (let course = 0; course < numCourses; course++) {
        prereqsPerCourse[course] = [];                                         
    }
    
    for (let i = 0; i < prerequisites.length; i++) {
        const [course, preReq] = prerequisites[i];
        prereqsPerCourse[course].push(preReq);                           
    }  
    
    return prereqsPerCourse;
}

var canFinish = function(numCourses, prerequisites) {

    const prereqsPerCourse = getPreReqsPerCourse(numCourses, prerequisites);

    const visitedState = {
        unknown: 0,
        checkingPreReqs: 1,
        preReqMet: 2,
    };
    

    const visitedStateByCourse = [];
    
    for (let course = 0; course < numCourses; course++) {
        visitedStateByCourse[course] = visitedState.unknown;
    }
    
    const isPreReqHierarchyValid = (course) => {
        
        const state = visitedStateByCourse[course];
        
        if (state === visitedState.checkingPreReqs) return false;   
        else if (state === visitedState.preReqMet) return true;     
        else if (state === visitedState.unknown) {                  
            
            visitedStateByCourse[course] = visitedState.checkingPreReqs;
            
            const preReqs = prereqsPerCourse[course];              
   
          
            for (let i = 0; i < preReqs.length; i++) {
                const preReq = preReqs[i];
                const isPreReqValid = isPreReqHierarchyValid(preReq);
                if (!isPreReqValid) return false;                   
            }
            
            visitedStateByCourse[course] = visitedState.preReqMet;  
            return true;
        }
    }
    
    for (let course = 0; course < numCourses; course++) {
        const isValid = isPreReqHierarchyValid(course);
        if (!isValid) return false;
    }

    return true;
};
```

```js
// A helper method that returns an array key'd off of a course
// number with it's value being a list of direct pre-requisites for the course
const getPreReqsPerCourse = (numCourses, prerequisites) => {
    
    const prereqsPerCourse = [];                                               
    
    // No pre-requisites by default, initialize empty arrays
    // for each courses pre-requisites
    for (let course = 0; course < numCourses; course++) {
        prereqsPerCourse[course] = [];                                         
    }
    
    // Add a new pre-requisite to the course for each relationship
    for (let i = 0; i < prerequisites.length; i++) {
        const [course, preReq] = prerequisites[i];
        prereqsPerCourse[course].push(preReq);                           
    }  
    
    return prereqsPerCourse;
}


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    const prereqsPerCourse = getPreReqsPerCourse(numCourses, prerequisites);

    // Possible states for each course
    const visitedState = {
        
        // We haven't checked this course yet
        unknown: 0,  
        
        // We're currently checking the prereqs. If we come accross a course with this 
        // state, it means that we've found a circular dependency and won't be able to
        // successfully meet the pre-requisites for it. 
        checkingPreReqs: 1,
        
        // We've already verified that we can take the pre-requisites for this course and
        // can skip it
        preReqMet: 2,
    };
    
    
    // An array key'd off of a course number with it's value 
    // being the previously mentioned `visitedState`
    const visitedStateByCourse = [];
    
    // Default each course's visited state to `unknown`
    for (let course = 0; course < numCourses; course++) {
        visitedStateByCourse[course] = visitedState.unknown;
    }
    
    // Recursively (i.e. via depth-first-search) check for a clean pre-requisite hierarchy for the
    // current course (i.e. one that does not contain circular dependancies)
    const isPreReqHierarchyValid = (course) => {
        
        const state = visitedStateByCourse[course];
        
        if (state === visitedState.checkingPreReqs) return false;   // We've found a circular dependency! :(
        else if (state === visitedState.preReqMet) return true;     // We've already verified this pre-req so we can skip it :)
        else if (state === visitedState.unknown) {                  // We haven't checked this one so let's go ahead and do so..
            
            visitedStateByCourse[course] = visitedState.checkingPreReqs; // Define this course as being in progress
            
            const preReqs = prereqsPerCourse[course];               // Get the pre-reqs for this course
   
            // Recursively validate each pre-requisite
            for (let i = 0; i < preReqs.length; i++) {
                const preReq = preReqs[i];
                const isPreReqValid = isPreReqHierarchyValid(preReq);
                if (!isPreReqValid) return false;                   // If validation fails, we can just return false;
            }
            
            visitedStateByCourse[course] = visitedState.preReqMet;  // All of the pre-reqs were met! Flag accordingly
            return true;
        }
    }
    
    
    // For each course, check for whether it has a valid pre-requisite hierarchy.
    // If any checks return false, we can return false :/
    for (let course = 0; course < numCourses; course++) {
        const isValid = isPreReqHierarchyValid(course);
        if (!isValid) return false;
    }
    
    // No checks have failed! Everything looks good :)
    return true;
};
```

## Solution: BFS -> The slowest
Reference: https://www.youtube.com/watch?v=rG2-_lgcZzo&feature=youtu.be

```js
var canFinish = function(numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0);
  const queue = [];
  /**
   * The goal is to find whether the course graph has cycles.
   * 
   * We are looking for the number of indgree for each course and 
   * put the course with no indegree into the queue. As we go 
   * through the courses in queue, we break off the dependency(edge)
   * from the current course in queue in all the prerequisite 
   * pairs. Then we put all the courses with zero indegree into
   * the queue. Repeat until the queue is empty. We maintain a 
   * count and increment it each time we pop the queue. The count 
   * will equal to the number of courses when there's no cycle and it 
   * is possible to take all the courses.
   *
   * directed graph denotes: [prereq] --> [course] 
   */
  for (const [course, prereq] of prerequisites) {
    indegree[course] += 1;
  }
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    } 
  }
  let count = 0;
  
  while (queue.length !== 0) { 
    const c = queue.pop();
    count += 1;
    
    for (const [course, prereq] of prerequisites) {
      if (prereq === c) {
        indegree[course] -= 1;
        if (indegree[course] === 0) {
          queue.push(course);
        }
      }
    }
  }
  return count === numCourses;
};
```