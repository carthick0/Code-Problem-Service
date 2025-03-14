const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");

const problemService = new ProblemService(new ProblemRepository());

function pingCheck(req, res) {
    return res.json({ message: 'Ping is alive' });
}

async function addProblem(req, res) {
    try {
        const newProblem = await problemService.createProblem(req.body);

        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created a new problem",
            error: {},
            data: newProblem
        });
    } catch (error) {
        console.error(error);
       
    }
}

async function getProblem(req, res) {
    try {
        
        const result = await problemService.getProblem(req.params.id);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched problem",
            error: {},
            data: result
        });
    } catch (error) {
        
    }
}

async function getProblems(req, res) {
   
    try {
        const response=await problemService.getAllProblems(); 
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully fetched all problem",
            error: {},
            data: response
        });
    } catch (error) {
        
    }
}

async function deleteProblem(req, res) {
    try {
        const response=await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully deleted problem",
            error: {},
            data: response
        });
    } catch (error) {
        
    }
}

function updateProblem(req, res) {
    return res.status(501).json({ message: 'Not implemented' });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingCheck,
};
