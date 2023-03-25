package sg.edu.nus.iss.day26server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sg.edu.nus.iss.day26server.model.Game;
import sg.edu.nus.iss.day26server.repository.GamesRepo;

@Service
public class GamesService {
    
    @Autowired
    GamesRepo gamesRepo;

public List<Game> getGames(Integer offset, Integer limit){
    return gamesRepo.getGames(offset, limit).stream()
                    .map(g -> Game.create(g))
                    .toList();
}

public List<Game> getGamesByRanking(Integer offset, Integer limit){
    return gamesRepo.getGamesByRanking(offset, limit).stream()
                    .map(g -> Game.create(g))
                    .toList();
}

public List<Game> getGamesById(Integer gid){
    return gamesRepo.getGamesById(gid).stream()   
                    .map(g -> Game.create(g))
                    .toList();
}
}
