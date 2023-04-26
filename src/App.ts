import express, { Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'
import PacienteRouter from './routes/Paciente.routes'
import MedicoRouter from './routes/Medico.routes'

/**
 * Clase que representa la aplicación
 * @class App
 * @description Clase que representa la aplicación
 * @version 1.0.0
 * @author Paulo César Coronado
 * @date 2020-10-01 
 * 
 */

class App {
	public app: any
	private server:any

	/**
   * Constructor de la clase
   * @constructor
   * @description Constructor de la clase
   * @version 1.0.0
   * @author Paulo César Coronado
   */

	constructor() {
		this.app = express()
		this.config()
		this.routes()
	}

	private config(): void {
		this.app.use(express.json())    
		this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
	}

	private routes(): void {
		this.app.get('/', (req: Request, res: Response) => {
			res.send('Bienvenido a nuestra API')
		})
		this.app.use('/api/v1', PacienteRouter)
		this.app.use('/api/v1', MedicoRouter)
	}

	public listen(): void {
		this.server=this.app.listen(3000, () => {
			console.log('Servidor corriendo en el puerto 3000')
		})
	}

	//Cerrar el servidor
	public close(): void {        
		this.server.close()
	}
    
}

export default App