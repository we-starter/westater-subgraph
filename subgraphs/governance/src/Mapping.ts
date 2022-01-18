import { Transfer, VoteNFT } from '../generated/VoteNFT/VoteNFT'
import { CreatePropose, Vote } from '../generated/VoteMain/VoteMain'
import { Project, ProjectVote } from '../generated/schema'
import { Address, BigInt } from '@graphprotocol/graph-ts'

const NFT_ADDRESS = Address.fromString("0xFeF7eF9FF582D154aFe329d906C13284Dd48b839")

export function handlerTransfer(event: Transfer): void {
  let id = event.params.tokenId.toString()
  let project = Project.load(id)
  const contract =  VoteNFT.bind(NFT_ADDRESS)
  if (project == null) {
    project = new Project(id)
    project.holder = event.params.to
    project.tokenId = event.params.tokenId
    const tokenURI = contract.tokenURI(project.tokenId)
    project.tokenURI = tokenURI
  }else{
    project.holder = event.params.to
  }
  project.save()
}


export function handlerCreatePropose(event: CreatePropose): void {
  let id = event.params.propID.toString()
  let projectVote = ProjectVote.load(id)
  
  const contract =  VoteNFT.bind(NFT_ADDRESS)
  if (projectVote == null) {
    projectVote = new ProjectVote(id)
    projectVote.ProjectId = event.params.propID
    projectVote.tokenId = event.params.NFTtokenId

    const tokenURI = contract.tokenURI(projectVote.tokenId)
    projectVote.tokenURI = tokenURI
    projectVote.begin = event.params.begin
    projectVote.voteMax = event.params.iwoAmountUSDT.times(BigInt.fromI32(10).pow(18)).div(event.params.warPrice)
    projectVote.voteYes = BigInt.fromI32(0)
    projectVote.voteNo = BigInt.fromI32(0)
    projectVote.save()
  }
}

export function handlerVote(event: Vote): void {
  let id = event.params.propID.toString()
  let projectVote = ProjectVote.load(id)
  
  if (projectVote != null) {
    if(event.params.voteType == BigInt.fromI32(1)){
      projectVote.voteYes = projectVote.voteYes.plus(event.params.amount)
    }else {
      projectVote.voteNo = projectVote.voteNo.plus(event.params.amount)
    }
    projectVote.save()
  }
}
