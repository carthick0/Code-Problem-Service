const { error } = require('winston');
const logger = require('../config/logger.config');
const {Problem} = require('../models');

class problemRepository{
    async createProblem(problemData){
        try {
            const problem= await Problem.create({
                title:problemData.title,
                description:problemData.description,
                testCases:(problemData.testCases)?problemData.testCases:[]
            });
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try {
            const problems=await Problem.find();
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getProblem(id){
        try {
            const getProblem=await Problem.findById(id);
            console.log(getProblem);
            return getProblem;
        } catch (error) {
            console.log(error);
        }
    }
    async deleteProblem(id){
        try {
            const deleteProblem=await Problem.findByIdAndDelete(id);
            if(!deleteProblem){
                logger.warn(`Problem with id :${id} not found in DB`);
                throw error;
            }
            return deleteProblem;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports=problemRepository;