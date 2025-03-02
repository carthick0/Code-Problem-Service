const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService{
    constructor(problemRepository){
        this.problemRepository=problemRepository
    }


    async createProblem(problemData){
        try {
            problemData.description=sanitizeMarkdownContent(problemData.description);
            console.log("paroblem data",problemData);
            const problem= await this.problemRepository.createProblem(problemData);
            console.log(problem);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try {
            const problems=await this.problemRepository.getAllProblems();
            return problems;
        } catch (error) {
            throw error;
        }
    }
    async getProblem(problemId){
        try {
            const getProblem=await this.problemRepository.getProblem(problemId);
            return getProblem;
        } catch (error) {
            
        }
    }
}

module.exports = ProblemService;