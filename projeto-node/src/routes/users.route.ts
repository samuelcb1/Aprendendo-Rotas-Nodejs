import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes';

const usersRouter = Router();

usersRouter.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Samuel' }];
    res.status(StatusCodes.OK).send({ users });
});

usersRouter.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid })
})

usersRouter.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;

    console.log(req.body);

    res.status(StatusCodes.CREATED).send(newUser)
});

usersRouter.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid

    res.status(StatusCodes.OK).send({ modifiedUser });
});

usersRouter.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK)
})

export default usersRouter