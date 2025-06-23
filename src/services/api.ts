import axios, {
	AxiosRequestConfig,
	AxiosResponse,
	RawAxiosRequestHeaders,
} from "axios";

export default class Api {
	private static _instance: Api | null = null;

	private _basePath: string;

	private _apiKey: string | null;

	public set apiKey(value: string) {
		this._apiKey = value;
	}

	public get apiKey(): string | null {
		return this._apiKey;
	}

	private constructor(basePath: string, apiKey: string | null) {
		this._basePath = basePath;
		this._apiKey = apiKey;
	}

	public static async getInstance() {
		if (!this._instance) {
			// Backend local para pruebas
			const basePath = `http://localhost:8000`;
			this._instance = new Api(basePath, null);
		}

		return this._instance;
	}

	public async request<RequestType, ResponseType>(config: AxiosRequestConfig) {
		const headers: RawAxiosRequestHeaders = {
			"Content-Type": "application/json",
			...(this._apiKey && { apiKey: this._apiKey }),
		};

		const configOptions: AxiosRequestConfig = {
			...config,
			baseURL: this._basePath,
			headers: { ...headers, ...config.headers },
		};

		return axios<RequestType, AxiosResponse<ResponseType>>(configOptions);
	}

	public get<RequestType, ResponseType>(config: AxiosRequestConfig) {
		const configOptions: AxiosRequestConfig = {
			...config,
			method: "GET",
		};

		return this.request<RequestType, ResponseType>(configOptions);
	}

	public post<RequestBodyType, ResponseBodyType>(
		data: RequestBodyType,
		options: AxiosRequestConfig,
	) {
		const configOptions: AxiosRequestConfig = {
			...options,
			method: "POST",
			data,
		};

		return this.request<RequestBodyType, ResponseBodyType>(configOptions);
	}

	public delete(options: AxiosRequestConfig) {
		const configOptions: AxiosRequestConfig = {
			...options,
			method: "DELETE",
		};

		return this.request<void, void>(configOptions);
	}

	public put<RequestBodyType, ResponseBodyType>(
		data: RequestBodyType,
		options: AxiosRequestConfig,
	) {
		const configOptions: AxiosRequestConfig = {
			...options,
			method: "PUT",
			data: data,
		};

		return this.request<RequestBodyType, ResponseBodyType>(configOptions);
	}

	public patch<RequestBodyType, ResponseBodyType>(
		data: RequestBodyType,
		options: AxiosRequestConfig,
	) {
		const configOptions: AxiosRequestConfig = {
			...options,
			method: "PATCH",
			data: data,
		};

		return this.request<RequestBodyType, ResponseBodyType>(configOptions);
	}
}
